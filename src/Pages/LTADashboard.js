import LTADashboardImg from "../images/LTADashboard.png";

const LTADashboard = () => {
    return (
        <div>
        <a href="https://ap-southeast-1.quicksight.aws.amazon.com/sn/analyses/a81af848-5b74-473a-bfba-0d6d345fb601" target="_blank" >
            <img src = {LTADashboardImg} style={{ display: "flex", width:'100%' }}/></a>
        </div>
    );
  };

  export default LTADashboard;