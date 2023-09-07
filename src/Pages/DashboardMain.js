import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import Embed from './Embed';
import { makeStyles } from '@material-ui/core/styles';
import CPODashboardImg from "../images/CPODashboard.png"

const useStyles = makeStyles((theme) => ({
  title: {
    paddingTop: theme.spacing(2)
  },
}));

// Amplify.configure(awsconfig);

const DashboardMain = () => {
  
  const classes = useStyles();
  
  return (
    <div>
      {/* <Container maxWidth="md">
        <Typography variant="h4" component="h1" align="center" color="textPrimary" className={classes.title} gutterBottom>
          Amazon QuickSight Embed
        </Typography>
        <Embed />
      </Container> */}
      <a href="https://ap-southeast-1.quicksight.aws.amazon.com/sn/analyses/efcd5163-6358-44b6-a065-79af149adae7" target="_blank" >
        <img src = {CPODashboardImg} style={{ display: "flex", width:'100%' }}/>
      </a>
    </div>
  );
}

export default DashboardMain;