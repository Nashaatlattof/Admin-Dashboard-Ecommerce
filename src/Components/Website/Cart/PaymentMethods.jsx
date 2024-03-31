import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { faCcAmazonPay, faCcApplePay, faCcPaypal, faGooglePay } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PaymentMethods = () => {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => {
   console.log(value)
  };

 

  return (
    <List sx={{ width: "100%", maxWidth: 250, bgcolor: "background.paper" }}>
      {[
        {
          number: 0,
          icon: <FontAwesomeIcon color="var(--mycolor)" icon={faCcPaypal} />,
        },
        {
          number: 1,
          icon: <FontAwesomeIcon color="var(--mycolor)" icon={faGooglePay} />,
        },
        {
          number: 2,
          icon: <FontAwesomeIcon color="var(--mycolor)" icon={faCcApplePay} />,
        },
        {
          number: 3,
          icon: <FontAwesomeIcon color="var(--mycolor)" icon={faCcAmazonPay} />,
        },
      ].map((value) => {
        const labelId = `checkbox-list-label-${value.number}`;

        return (
          <ListItem
            key={value.number}
            secondaryAction={<IconButton edge="end">{value.icon}</IconButton>}
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value.number)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                sx={{".css-i4bv87-MuiSvgIcon-root.css-i4bv87-MuiSvgIcon-root": {
                    color:'var(--mycolor)'
                }}}
                  edge="start"
                  checked={console.log(checked.indexOf(value.number) !== -1)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}


export default PaymentMethods 





 