import { useState } from "react";
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger";
import './Stats.css'

function Stats() {

    const [counterState, setCounterState] = useState(false);

    return (
    <div className="stats-section">
        <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
            <div className="stats-container">
                <div>
                    <h2>

                        { counterState &&
                          <CountUp start={0} end={95}></CountUp>
                        }%

                        </h2>
                    <p>Lorem, ipsum.</p>
                </div>

                <div>
                <h2 className="">
                { counterState &&
                          <CountUp start={0} end={95}></CountUp>
                        }%
                        </h2>
                    <p className="">Lorem, ipsum.</p>
                </div>

                <div>
                <h2 className="">
                { counterState &&
                          <CountUp start={0} end={95}></CountUp>
                        }%
                        </h2>
                    <p className="">Lorem, ipsum.</p>
                </div>

                <div>
                <h2 className="">
                { counterState &&
                          <CountUp start={0} end={95}></CountUp>
                        }%
                        </h2>
                    <p className="">Lorem, ipsum.</p>
                </div>

            </div>
        </ScrollTrigger>
    </div>
  )
}

export default Stats
