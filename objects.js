// Create Object
meals = {breakfast:"bacon"};
// or meals = new Object({breakfast:"bacon"});
// or meals = new Object({}); -> empty Object

const firstMeal = "breakfast";

// meals  = {firstMeal:"oatmeal"}; -> firstMeal not breakfast
// var meals = {[firstMeal]:"oatmeal"}; -> {breakfast:"oatmeal"}

// Access values
// meals.breakfast
// meals[firstMeal]
// meals["breakfast"]

// Add key:value
meals.snack = "yogurt";
// or meals["snack"] = "bagel";

// access: 
meals["snack"]; // -> yogurt

// pass reference (destructive)
function destructivelyUpdateObject(obj, key, value)
{
    obj[key]=value;
    return obj;
}

// Example: returns {eggs:3, flour:"3 cups"} also recipe
const recipe = {egges:3};
destructivelyUpdateObject(recipe, "flour", "3 cups");  // modifies const recipe

// pass by value (copy) 
function updateObjectWithKeyValue(obj, key, value)
{
  // mergs everything on right into new Object
  // in this case the empty object {}
  return Object.assign( {}, obj, { [key]:value })
}

const recipe2 = {egges:3};
updateObjectWithKeyValue(recipe2, "chocolate", "1 cup");
// returns {eggs:3, choclate:1 cup}
// but recipe2 is still {eggs:3}

function updateObjectWithKeyValueBest(targetObject, updateObject)
{
    return Object.assign({}, targetObject, updateObject);
}
