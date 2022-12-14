// const keywords = "./keywords.js";
const keywords = [
  "collide",
  "crash",
  "scratch",
  "bump",
  "smash",
  "collides",
  "collided",
  "colliding",
  "crashes",
  "crashed",
  "crashing",
  "scratches",
  "scratched",
  "scratching",
  "bumps",
  "bumped",
  "bumping",
  "smashes",
  "smashed",
  "smashing",
];
const Main = require("./main");

module.exports = async function (context, req) {
  context.log.info("Risk rating started");

  const newRiskAssessment = req.body;
  //input validation
  if (newRiskAssessment && newRiskAssessment.name && newRiskAssessment.risk) {
    const risk = Main(keywords, req.body.risk);
    context.res = {
      status: 200 /* Defaults to 200 */,
      body: { riskrating: risk, name: newRiskAssessment.name },
    };
  } else {
    context.res = {
      status: 400 /* Defaults to 400 */,
      body: { error: "Invalid request" },
    };
    context.log.info("risk rating invalied input error");
  }
  context.log.info("Risk rating completed successfully");
};
