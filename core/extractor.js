function extractFunctions(dir) {
  // MVP：假数据
  return [
    {
      id: "func://payment/stripe/subscription/v1",
      intent: "Handle recurring subscription payments using Stripe",
      tags: ["payment", "stripe", "subscription"]
    },
    {
      id: "func://auth/jwt/login/v1",
      intent: "User login with JWT authentication",
      tags: ["auth", "jwt"]
    }
  ];
}

module.exports = { extractFunctions };
