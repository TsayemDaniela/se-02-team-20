import "./Main.css";

export default function Main() {
  return (
    <body>
      <section class="section-1">
        <div class="content">
          <main class="about">
            <h1 class="name"> The Beer Game</h1>
            <h2 class="sub">Teaching supply chain through games</h2>

            <div class="info-box standard-text">
              <p class="">
                Learn the bull whip effect in supply chain management through simulation. <br />
                <br />Click <a href="/player">here</a> if you have been given a password
                <br /> Click <a href="/player">here </a>
                to play with a random group <br />
                <a href="./login/">Login</a> or{" "}
                <a href="./registration/">Register</a>
              </p>
            </div>
          </main>
        </div>
      </section>

    <section class="section-2">
      <div class="content">
        <main>
          <h1 class="about">About the Beer Game</h1>
          <div class="description">
            <p>
              The Beer Game simulates a supply chain with four stages - retailer,
              whole- saler, distributor and factory. The challenge is to keep the
              costs as low as possible, while fulfilling the incoming orders of
              beer and customer demand, and avoiding backlogs. The game is played
              in rounds, which simulate weeks. <br />
            </p>
          </div>
        </main>
      </div>
    </section>
  </body>
  
  
  ) 
  
}