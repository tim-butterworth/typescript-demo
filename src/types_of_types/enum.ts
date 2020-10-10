// Default style enum
enum MyEnum {
    VALUE_1, VALUE_2, VALUE_3
}

const defaultEnumValue: MyEnum = MyEnum.VALUE_1

console.log(defaultEnumValue)

// Enums can be backed by strings
enum MyStringEnum {
    VALUE_1 = "V_1",
    VALUE_2 = "V_2"
}

const stringValue: MyStringEnum = MyStringEnum.VALUE_1

console.log(stringValue)

// Enums can be backed by numbers
enum MyNumberEnum {
    VALUE_1 = 2,
    VALUE_2 = 3,
    VALUE_3 = 5,
    VALUE_4 = 7,
    VALUE_5 = 11,
}

const numberValue: MyStringEnum = MyStringEnum.VALUE_1

console.log(numberValue)