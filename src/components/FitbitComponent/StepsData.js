import React from "react";
import axios from "axios";

class StepsData extends React.Component {
  constructor(props) {
    super(props);
    this.state = { days: [], isLoaded: false };
    this.onPageLoad = this.onPageLoad.bind(this);
  }

  componentDidMount() {
    this.onPageLoad().then((result) => {
      this.setState({
        isLoaded: true,
      });
    });
  }
  async onPageLoad() {
    const response = await axios.get(
      `https://api.fitbit.com/1/user/-/activities/steps/date/today/1w.json`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM0JCUlYiLCJzdWIiOiI5NVJZTkMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdhY3Qgd3NldCB3bG9jIiwiZXhwIjoxNjMzNzMyMjMyLCJpYXQiOjE2MzExNDAyMzJ9.2hjIBTVK8zfSOklzyd874fo1VSbBBgDTgQ7DRynsII8",
        },
      }
    );
    const arr = response.data["activities-steps"].map(function (val, index) {
      return { value: val.value };
    });
    this.setState({
      days: arr,
    });
  }

  render() {
    return <div>{this.state.days.length}</div>;
  }
}

export default StepsData;
