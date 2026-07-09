# EXERCISE 1 – Fix broken codes

## Q1 - Broken Code 1
```javascript
User.hasOne(Profile);
await sequelize.sync();

const profile = await Profile.create({ bio: 'Test' });
const user = await profile.createUser({ username: 'joe' });
```
**Problem:** 
Missing inverse relationship `Profile.belongsTo(User)` means Profile has no `createUser` method.

**Fix:**
```javascript
User.hasOne(Profile);
Profile.belongsTo(User); 

await sequelize.sync();

const profile = await Profile.create({ bio: 'Test' });
const user = await profile.createUser({ username: 'joe' });
```

---

## Q2 - Broken Code 2
```javascript
Book.hasMany(Author);   

await sequelize.sync();
const author = await Author.create({ name: 'Samnang' });
const book = await author.createBook({ title: 'Wrong Way' })
```
**Problem:**
Missing inverse relationship `Author.hasMany(Book)` means Author has no `createBook` method.

**Fix:**
```javascript
// Define the inverse relationship
Book.hasMany(Author);   
Author.belongsTo(Book);

await sequelize.sync();

const author = await Author.create({ name: 'Samnang' });
const book = await author.createBook({ title: 'Wrong Way' });
```

---

## Q3 - Broken Code 3
```javascript
User.hasOne(Profile);
Profile.belongsTo(User);

const user = await User.create({ username: 'Jon' });
const profile = await Profile.create({ bio: 'hello' });

await user.addProfile(profile);
```
**Problem:**
Single associations (`hasOne`) use the `setProfile` method, not `addProfile`.

**Fix:**
```javascript
User.hasOne(Profile);
Profile.belongsTo(User);

await sequelize.sync(); 

const user = await User.create({ username: 'Jon' });
const profile = await Profile.create({ bio: 'hello' });

await user.setProfile(profile);
```

---

## Q4 - Broken Code 4
```javascript
Employee.hasOne(Manager);  
Manager.hasOne(Employee);
```
**Problem:**
Using `hasOne` on both tables incorrectly creates two foreign keys instead of one.

**Fix:**
```javascript
//Use one hasOne and one belongsTo. The belongsTo declaration decides which table actually holds the foreign key.
Manager.hasOne(Employee);
Employee.belongsTo(Manager);
```
