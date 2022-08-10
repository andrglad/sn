import classes from "./Profile.module.css";
import React from 'react';

function Profile() {
    return(
        <div className={classes.Profile}>
            <div className={classes.profile_bg}><img className={classes.profile_pic} width="100%" height="200px" alt="Profile Background" src="https://az837918.vo.msecnd.net/publishedimages/Listings/1196/en-CA/images/1/jasper-national-park-L-17.jpg"></img></div>
            <div className={classes.photo}><img alt="avatar" width="100%" src="https://pixelbox.ru/wp-content/uploads/2021/04/ava-mult-vk-49.jpg" /></div>
            <div className={classes.info}>Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50 Lorem50  </div>
        </div>
    );
}

export default Profile;