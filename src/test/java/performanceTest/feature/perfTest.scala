package feature

import com.intuit.karate.gatling.PreDef._
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class perTest extends Simulation {

  val protocol = karateProtocol()

//   protocol.nameResolver = (req, ctx) => req.getHeader("karate-name")
//   protocol.runner.karateEnv("perf")

  val validate = scenario("validate").exec(karateFeature("classpath:performanceTest/feature/userAccount.feature"))

setUp(
    validate.inject(
      nothingFor(4.seconds), // Wait for 4 seconds before starting
      atOnceUsers(10), // Inject 10 users immediately
      rampUsers(10) during (5.seconds), // Ramp up 10 users over 5 seconds
      constantUsersPerSec(20) during (15.seconds) // Maintain 20 users per second for 15 seconds
    ).protocols(protocol) // Attach the protocol to the scenario
  )

}