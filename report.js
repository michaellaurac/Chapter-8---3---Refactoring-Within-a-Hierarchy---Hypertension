class Report {
  constructor (params) {
    this.params = params;
  };

  printReport (params) {
    return params;
  };
}

class GenericReport extends Report {
  constructor (params) {
    super(params);
    this.params = params;
  };

  printReport (params) {
    return super.printReport(Object.assign(this.params, params));
  };
};

class ClientReport extends GenericReport {
  constructor (params) {
    super(params);
    this.params = params;
  };

  printReport (params) {
    return super.printReport(Object.assign(this.params, params));
  };
};

class SpecificClientReport extends ClientReport {
  constructor (params) {
    super(params);
    this.params = params;
  };

  printReport (params) {
    return super.printReport(Object.assign(this.params, params));
  };
};

/* eslint-env mocha */

const wish = require("wish");
const deepEqual = require("deep-equal");

describe("the file", () => {
  const report = new SpecificClientReport({ whatever: "we want", to: "add" });

  it("prints the additional paramaters correctly", () => {
    wish(deepEqual(report.printReport({ extra: "params" }), { whatever: "we want", to: "add", extra: "params" }));
  });
});
