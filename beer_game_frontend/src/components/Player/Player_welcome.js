import React, { useState } from "react";
import { Tabs } from "@feuer/react-tabs";
import "./Player_welcome.css";

export default function Player() {
  const [state, setState] = useState({
    email: "",
    code: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      code: state.code,
    };
  };
  return (
    <div id="parent" class="col-12">
      <div class="box">
        <div className="welcome-page col-lg-10 hv-center">
          <Tabs
            tabsProps={{
              style: {
                textAlign: "left",
              },
            }}
            activeTab={{
              id: "tab1",
            }}
          >
            <div class="tabs">
              <Tabs.Tab id="tab1" title="Join games">
                <div class="join-games">
                  <form>
                    <div className="form-group text-left">
                      <label htmlFor="exampleInputEmail1">
                        Instructor Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group text-left">
                      <label htmlFor="exampleInputCode">Game Code</label>
                      <input
                        type="password"
                        className="form-control"
                        id="code"
                        placeholder="Game Code"
                        value={state.code}
                        onChange={handleChange}
                      />
                    </div>
                    <hr />
                    <div id="submit-button">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={handleSubmitClick}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Tabs.Tab>
              <Tabs.Tab id="tab2" title="Create games">
                <div class="container create-game">
                  <label id="invite-friends-title">Invite Friends</label>
                  <div class="invite-friends">
                    <input
                      type="email"
                      className="form-control"
                      id="friend-email"
                      placeholder="Enter email"
                    />
                    <select class="form-select">
                      <option selected>Pick a role</option>
                      <option value="1">Retailer</option>
                      <option value="2">Wholesaler</option>
                      <option value="3">Distributor</option>
                      <option value="4">Factory</option>
                    </select>
                  </div>
                  <div class="invite-friends">
                    <input
                      type="email"
                      className="form-control"
                      id="friend-email"
                      placeholder="Enter email"
                    />
                    <select class="form-select">
                      <option selected>Pick a role</option>
                      <option value="1">Retailer</option>
                      <option value="2">Wholesaler</option>
                      <option value="3">Distributor</option>
                      <option value="4">Factory</option>
                    </select>
                  </div>
                  <div class="invite-friends">
                    <input
                      type="email"
                      className="form-control"
                      id="friend-email"
                      placeholder="Enter email"
                    />
                    <select class="form-select">
                      <option selected>Pick a role</option>
                      <option value="1">Retailer</option>
                      <option value="2">Wholesaler</option>
                      <option value="3">Distributor</option>
                      <option value="4">Factory</option>
                    </select>
                  </div>
                  <hr id="hr-create-game" />
                  <label id="rounds-title">Number of Rounds</label>
                  <input
                    type="number"
                    className="form-control"
                    id="friend-text"
                    placeholder="Enter number of rounds"
                    min="1"
                    max="24"
                  />
                  <hr id="hr-create-game" />
                  <label id="inventory-title">Init. Inventory</label>
                  <div class="invite-friends">
                    <label id="roles">Retailer</label>
                    <input
                      type="number"
                      className="form-control"
                      id="friend-text"
                      placeholder="initial inventory"
                    />
                  </div>
                  <div class="invite-friends">
                    <label id="roles">Wholesaler</label>
                    <input
                      type="number"
                      className="form-control"
                      id="friend-text"
                      placeholder="initial inventory"
                    />
                  </div>
                  <div class="invite-friends">
                    <label id="roles">Distributor</label>
                    <input
                      type="number"
                      className="form-control"
                      id="friend-text"
                      placeholder="initial inventory"
                    />
                  </div>
                  <div class="invite-friends">
                    <label id="roles">Factory</label>
                    <input
                      type="number"
                      className="form-control"
                      id="friend-text"
                      placeholder="initial inventory"
                    />
                  </div>
                  <hr id="hr-create-game" />
                  <label id="cost-title">Costs</label>
                  <div class="invite-friends">
                    <label id="costs">Beers</label>
                    <input
                      type="number"
                      className="form-control"
                      id="friend-text"
                      placeholder="initial inventory"
                    />
                  </div>
                  <div class="invite-friends">
                    <label id="costs">Backlog</label>
                    <input
                      type="number"
                      className="form-control"
                      id="friend-text"
                      placeholder="initial inventory"
                    />
                  </div>
                  <hr id="hr-create-game" />
                  <div id="submit-button">
                      <button
                        type="submit"
                        className="btn btn-primary"
                      >
                        Submit
                      </button>
                    </div>
                </div>
              </Tabs.Tab>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
