import React from "react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Progress from "./Progress";
import "./StepsData.scss";
import FitnessText from "./FitnessText";
import FitnessProfile from "./FitnessProfile";

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
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM0JGVkIiLCJzdWIiOiI5NVJZTkMiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJ3aHIgd251dCB3cHJvIHdzbGUgd3dlaSB3c29jIHdzZXQgd2FjdCB3bG9jIiwiZXhwIjoxNjU0MDIxOTc3LCJpYXQiOjE2NTM5MzU3MDZ9.x46afAQ0A3dVDbsmvNVzFxq9sxxaGV7nOaNKagPw3qA",
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
    const day = new Date();
    const day1 = day.getDay();
    const dateConvert = (day) => {
      //console.log(day);
      if (day % 7 == 0) return "Sun";
      else if (day % 7 == 1) return "Mon";
      else if (day % 7 == 2) return "Tues";
      else if (day % 7 == 3) return "Wed";
      else if (day % 7 == 4) return "Thur";
      else if (day % 7 == 5) return "Fri";
      else if (day % 7 == 6) return "Sat";
      else return "";
    };

    return (
      <div>
        {this.state.days.length > 0 ? (
          <div className="rowC">
            <div className="label">
              {dateConvert(day1)}
              <Progress num={realNums[6]} />
            </div>
            <div className="label">
              {dateConvert((day1 + 6) % 7)}
              <Progress num={realNums[5]} />
            </div>
            <div className="label">
              {dateConvert((day1 + 5) % 7)}
              <Progress num={realNums[4]} />
            </div>
            <div className="label">
              {dateConvert(day1 + 4)}
              <Progress num={realNums[3]} />
            </div>
            <div className="label">
              {dateConvert(day1 + 3)}
              <Progress num={realNums[2]} />
            </div>
            <div className="label">
              {dateConvert(day1 + 2)}
              <Progress num={realNums[1]} />
            </div>
            <div className="label">
              {dateConvert(day1 + 1)}
              <Progress num={realNums[0]} />
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
