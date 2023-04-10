import {test, expect} from "@jest/globals"
import {fizzPop} from "./main.js"


test("3", function () {expect(fizzPop([3])).toStrictEqual(['fizz'])})
test("5", function () {expect(fizzPop([5])).toStrictEqual(['pop'])})
test("15", function () {expect(fizzPop([15])).toStrictEqual(['fizzpop'])})
test("0", function () {expect(fizzPop([0])).toStrictEqual([0])})
test("negative number", function () {expect(fizzPop([-8])).toStrictEqual([-8])})
test("decimal number", function () {expect(fizzPop([1.2])).toStrictEqual([1.2])})
test("large number", function () {expect(fizzPop([6758411])).toStrictEqual([6758411])})