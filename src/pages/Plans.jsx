export function Plans() {
  const plans = [
    {
      id: 0,
      title: "Basic",
      price: 0,
      benefits: ["5 Movies", "Movie Updates", "Cancel Anytime"],
    },
    {
      id: 1,
      title: "Gold",
      price: 12,
      benefits: [
        "20 Movies",
        "Movie Updates",
        "Free Upgrade",
        "No adverts",
        "Premium Customer Support",
        "Cancel Anytime",
      ],
    },
    {
      id: 2,
      title: "Platinum",
      price: 25,
      benefits: [
        "Unlimited Movies",
        "Movie Updates",
        "Free Upgrade",
        "Download Movies",
        "No adverts",
        "Premium Customer Support",
        "Cancel Anytime",
      ],
    },
  ];
  return (
    <div className="d-flex  authorization-page py-5">
      <div className="col-lg-12 col-md-12 col-sm-12 mx-auto">
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center w-lg-50">
          <h1 className="display-5 fw-normal text-body-emphasis text-center">
            Subscription Plans
          </h1>
          <p className="fs-5 text-body-secondary py-4">
            We have a variaty of subscription plans to choose from. Each of
            these comes with a tonne of benefits you would not want to miss.
            Subscribe today and start enjoying immediately.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 ">
          {plans.map((plan) => (
            <div className="col" key={plan.id}>
              <div className="card mb-4  border-0">
                <div className="card-header py-3">
                  <h4 className="my-0 display-4">{plan.title}</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title py-3">
                    ${plan.price}
                    <small className="text-body-secondary fw-light">/mo</small>
                  </h1>

                  <ul className="list-group list-group-flush">
                    {plan.benefits.map((benefit) => (
                      <li className="list-group-item" key={benefit.length + 1}>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/checkout"
                    type="button"
                    className="w-100 btn btn-main btn-lg rounded-0 mt-3"
                  >
                    Subscribe now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
