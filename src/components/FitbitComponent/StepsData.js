import React from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Progress from "./Progress";
import "./StepsData.css";

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
    const realNums = [];
    const fuckingYah = () => {
      var i = 0;
      for (var propName in this.state.days) {
        if (this.state.days.hasOwnProperty(propName)) {
          var propValue = this.state.days[propName];
          realNums[i++] = propValue.value;
        }
      }
    };
    fuckingYah();
    const daysStrings = this.state.days.map((day) => JSON.stringify(day));
    //const numsForGraph = realNums.map((day) => parseInt(day));
    const stepsOutOf1 = realNums[1];
    return (
      <div>
        {this.state.days.length > 0 ? (
          <div className="rowC">
            <div className="label">
              Mon
              <Progress num={realNums[0]} />
            </div>
            <div className="label">
              Tues
              <Progress num={realNums[1]} />
            </div>
            <div className="label">
              Wed
              <Progress num={realNums[2]} />
            </div>
            <div className="label">
              Thu
              <Progress num={realNums[3]} />
            </div>
            <div className="label">
              Fri
              <Progress num={realNums[4]} />
            </div>
            <div className="label">
              Sat
              <Progress num={realNums[5]} />
            </div>
            <div className="label">
              Sun
              <Progress num={realNums[6]} />
            </div>
          </div>
        ) : (
          <div className="spinner">
            <div class="ui active centered inline loader"></div>
          </div>
        )}
      </div>
    );
  }
}

export default StepsData;

/*
<div className="rowC">
          <div className="label">
            Mon
            <Progress num={realNums[0]} />
          </div>
          <div className="label">
            Tues
            <Progress num={realNums[1]} />
          </div>
          <div className="label">
            Wed
            <Progress num={realNums[2]} />
          </div>
          <div className="label">
            Thu
            <Progress num={realNums[3]} />
          </div>
          <div className="label">
            Fri
            <Progress num={realNums[4]} />
          </div>
          <div className="label">
            Sat
            <Progress num={realNums[5]} />
          </div>
          <div className="label">
            Sun
            <Progress num={realNums[6]} />
          </div>
        </div>
*/
