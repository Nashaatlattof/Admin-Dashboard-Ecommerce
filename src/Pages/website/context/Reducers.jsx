export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.cart.find(
        (c) => c.id === action.payload.id
      );

      if (existingProduct) {
        // إذا كان المنتج موجود في السلة، قم بتحديث الكمية
        const updatedCart = state.cart.map((c) =>
          c.id === action.payload.id
            ? { ...c, qty: c.qty + 1, subtotal: (c.qty + 1) * c.price }
            : c
        );

        // قم بتحديث Local Storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        // إذا لم يكن المنتج موجود في السلة، قم بإضافته
        const updatedCart = [...state.cart, { ...action.payload, qty: 1 }];

        // قم بتحديث Local Storage
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        return {
          ...state,
          cart: updatedCart,
        };
      }

    case "REMOVE_FROM_CART":
      // تحديث Local Storage عند إزالة منتج
      const updatedCartAfterRemove = state.cart.filter(
        (c) => c.id !== action.payload.id
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartAfterRemove));

      return {
        ...state,
        cart: updatedCartAfterRemove,
      };
    case "INCREMENT_QTY":
      const incrementedCart = state.cart.map((c) =>
        c.id === action.payload.id ? { ...c, qty: c.qty + 1 } : c
      );

      localStorage.setItem("cart", JSON.stringify(incrementedCart));

      return {
        ...state,
        cart: incrementedCart,
      };

    case "DECREMENT_QTY":
      const decrementedCart = state.cart.map((c) =>
        c.id === action.payload.id && c.qty > 1 ? { ...c, qty: c.qty - 1 } : c
      );

      localStorage.setItem("cart", JSON.stringify(decrementedCart));

      return {
        ...state,
        cart: decrementedCart,
      };

    // المزيد من الحالات...

    default:
      return state;
  }
};
