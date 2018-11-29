//BIOMAP_ADMIN_NAME = 'biomap_admin';
//BIOMAP_ADMIN_PASSWORD = 'password';

//db = db.getSiblingDB('admin');
//db.createUser(
//	{
//		user: BIOMAP_ADMIN_NAME,
//		password: BIOMAP_ADMIN_PASSWORD,
//		roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
//	}
//);

var BIOMAP_USER_NAME = 'biomap';
var BIOMAP_USER_PASSWORD = 'pamoib';

console.log("setup biomap");

db = db.getSiblingDB('biomap');
db.createUser(
	{
		user: BIOMAP_USER_NAME,
		pwd: BIOMAP_USER_PASSWORD,
		roles: [ {role: "read", db: "biomap"} ]
	}
);
