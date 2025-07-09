///|
///
///
let jsonValue = JsonValue::Object({ "name": "Alice", "age": 30 })

///|
pub fn json_parse(data : JsonValue) -> Int {
  let json_value = @json.stringify(data)
  json_value
}

///|
fn main {
  println(json_parse("{\"key\": \"value\"}"))
}
