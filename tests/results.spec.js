const { getResultForQuestion } = require("../src/results");

describe("getResultForQuestion - 'PING'", () => {
  test("should return PONG for PING", () => {
    expect(getResultForQuestion("PING")).toBe("PONG");
  });
});

describe("getResultForQuestion - 'What is your name?'", () => {
  test("should return my name", () => {
    expect(getResultForQuestion("What is your name?")).toBe("Akhil Uddemarri");
  });
});

describe("getResultForQuestion - 'What is your quest?'", () => {
  test("should return coding", () => {
    expect(getResultForQuestion("What is your quest?")).toBe("coding");
  });
});

describe("getResultForQuestion - addition pattern", () => {
  test("should add 3 numbers", () => {
    expect(getResultForQuestion("1142 + 1429 + 408 = ?")).toBe("2979");
  });

  test("should add 4 numbers", () => {
    expect(getResultForQuestion("924 + 1334 + 1257 + 214 = ?")).toBe("3729");
  });
});

describe("getResultForQuestion - word pattern", () => {
  test("should handle 2 words", () => {
    expect(getResultForQuestion("alpha felicity")).toBe("2-8-5");
  });

  test("should handle more than 2 words", () => {
    expect(getResultForQuestion("serendipity misty ocean dapper")).toBe(
      "4-17-10"
    );
  });
});

describe("getResultForQuestion - sequence", () => {
  test("should return 55 47 53 75 67", () => {
    expect(getResultForQuestion("< 32 26 21 32 15 49 18 49 40 15 >")).toBe("");
  });
});

describe("getResultForQuestion - matrix", () => {
  test("should return columns in ascending order for ABCD", () => {
    const input = `ABCD
    A-><-
    B-=--
    C--=-
    D-->-`;
    expect(getResultForQuestion(input)).toBe("BACD");
  });

  test("should return columns in ascending order for ABCD", () => {
    const input = `ABCD
    A->--
    B-=--
    C--->
    D>---`;
    expect(getResultForQuestion(input)).toBe("BADC");
  });

  test("should return columns in ascending order for ABCDE", () => {
    const input = `ABCDE
    A=----
    B>----
    C---<-
    D----<
    E<----`;
    expect(getResultForQuestion(input)).toBe("CDEAB");
  });

  test("should return columns in ascending order for ABCDE", () => {
    const input = `ABCDE
    A=----
    B<--->
    C----<
    D>----
    E----=`;
    expect(getResultForQuestion(input)).toBe("CEBAD");
  });

  test("should return columns in ascending order for ABCDEF", () => {
    const input = `ABCDEF
    A=-----
    B-=----
    C<-->--
    D---=--
    E-<--->
    F>-----`;
    expect(getResultForQuestion(input)).toBe("DCAFEB");
  });

  test("should return columns in ascending order for ABCDEF", () => {
    const input = `ABCDEF
        A=-----
        B-->---
        C>-----
        D<-----
        E---<->
        F-----=`;
    expect(getResultForQuestion(input)).toBe("FEDACB");
  });

  test("should return columns in ascending order for ABCDEF", () => {
    const input = `ABCDEF
        A--->--
        B-=----
        C->---<
        D---=--
        E-<----
        F---<--`;
    expect(getResultForQuestion(input)).toBe("EBCFDA");
  });
});
