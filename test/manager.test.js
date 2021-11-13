const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Michael G. Scott", 1, "m.scott@dundermifflin.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Michael G. Scott", 1, "m.scott@dundermifflin.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Michael G. Scott", 1, "m.scott@dundermifflin.com.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});