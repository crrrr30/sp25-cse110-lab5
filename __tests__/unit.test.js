// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// isPhoneNumber
test("simple phone number: `123-456-7890`", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});

test("parenthesized area code: `(123)456-7890`", () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});

test("dash-less phone number: `1234567890`", () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

test("incorrect length: `123456789`", () => {
  expect(isPhoneNumber("123456789")).toBe(false);
});


// isEmail
test("simple email: `john@doe.com`", () => {
  expect(isEmail("john@doe.com")).toBe(true);
});

test("simple email: `123456@example.com`", () => {
  expect(isEmail("123456@example.com")).toBe(true);
});

test("missing `@`: `john.doe`", () => {
  expect(isEmail("john.doe")).toBe(false);
});

test("trailing dot: `john.doe@google.com.`", () => {
  expect(isEmail("john.doe@google.com.")).toBe(false);
});

// isStrongPassword
test("strong password: `applesauce`", () => {
  expect(isStrongPassword("applesauce")).toBe(true);
});

test("strong password: `teslercars`", () => {
  expect(isStrongPassword("teslercars")).toBe(true);
});

test("password too short: `cse`", () => {
  expect(isStrongPassword("cse")).toBe(false);
});

test("space not allowed: `chicken jockey`", () => {
  expect(isStrongPassword("chicken jockey")).toBe(false);
});

// isDate

test("testing date: `1/1/2000`", () => {
  expect(isDate("1/1/2000")).toBe(true);
});

test("testing date: `12/1/2000`", () => {
  expect(isDate("12/1/2000")).toBe(true);
});

test("date with dashes: `12-1-2000`", () => {
  expect(isDate("12-1-2000")).toBe(false);
});

test("YYYY/MM/DD: `2000/12/1`", () => {
  expect(isDate("2000/12/1")).toBe(false);
});

// isHexColor

test("missing leading `#` allowed: `000000`", () => {
  expect(isHexColor("000000")).toBe(true);
})

test("mixing lower- and upper-case: `#FFffFF`", () => {
  expect(isHexColor("#FFffFF")).toBe(true);
})

test("invalid hex: `#ffggff`", () => {
  expect(isHexColor("#ffggff")).toBe(false);
})

test("invalid length: `#0000`", () => {
  expect(isHexColor("#0000")).toBe(false);
})
