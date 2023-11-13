import React from 'react';

const Spinner = (props) => {
return (
<>
 <div class="ui active dimmer">
   <div class="ui active loader">{props.message}</div>
 </div>
 <p></p>
</>
);
};

Spinner.defaultProps = {
  message:"loading..."
};

export default Spinner;