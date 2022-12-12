import {makeAutoObservable} from 'mobx';

export interface userModelProps {
	userId: number | null,
	name: string | null,
	email: string | null,
	gold: number | null,
	avatar: string,
	JWTtoken: string | null,

  logout: Function,
  setJWTtoken: Function,
	registerUser: Function,
	loginUser: Function,
	fetchUserData: Function,
  changeName: Function,
  changePassword: Function,
}

export const userModel: userModelProps = makeAutoObservable({
	// STORE
	userId: null,
	name: null,
	email: null,
	gold: null,
	avatar: "/images/user/user-avatar.svg",
	JWTtoken: null,

	// ACTIONS
	logout: () => {
    typeof window !== "undefined" ? localStorage.removeItem("JWTtoken") : null;
    userModel.JWTtoken = null;
  },

  setJWTtoken: (token: any) => {
    userModel.JWTtoken = token;
  },

	registerUser: async (email: string, password: string, name: string) => {
		try {
			const res = await fetch("https://gateway.pureblock.io/api/auth/register", {
				method: "POST",
				body: JSON.stringify({name, email, password}),
				headers: {"Content-Type": "application/json"},
			});
	
			const data = await res.json();
	
			if (data.success) {
				typeof window !== "undefined" ? localStorage.setItem("JWTtoken", data.body.token) : null;
				userModel.JWTtoken = data.body.token;
			}

		} catch (error) {
			console.log("registerUser error: " + error);
		}
	},

	loginUser: async (email: string, password: string) => {
    try {
      const res = await fetch("https://gateway.pureblock.io/api/auth/login", {
        method: "POST",
        body: JSON.stringify({email, password}),
        headers: {"Content-Type": "application/json"},
      });

      const data = await res.json();

      if (data.success) {
        typeof window !== "undefined" ? localStorage.setItem("JWTtoken", data.body.token) : null;
        userModel.JWTtoken = data.body.token;
      }

    } catch (error) {
      console.log("loginUser error: " + error);  
    }
  },

	fetchUserData: async () => {
    try {
      const res = await fetch("https://gateway.pureblock.io/api/auth/profile", {
        method: "GET",
        headers: {
          Accept: "application/json",
          Auth: `${userModel.JWTtoken}`,
        }
      });

      const data = await res.json();

      if (data.success) {
        userModel.userId = data.body.id;
        userModel.name = data.body.name;
        userModel.email = data.body.email;
        userModel.gold = data.body.gold;
      }

    } catch (error) {
      console.log("fetchUserData error: " + error);  
    }
  },

	changeName: async (name: string) => {
    try {
      const res = await fetch("https://gateway.pureblock.io/api/auth/change-name", {
        method: "POST",
        body: JSON.stringify({name}),
        headers: {
          "Content-Type": "application/json",
          Auth: `${userModel.JWTtoken}`,
        },
      });

      const data = await res.json();
			
      if (data.success) {
				userModel.name = name;
				console.log("your password has been successfully changed: " + data);
      }

    } catch (error) {
      console.log("changeName error: " + error);  
    }
  },

  changePassword: async (oldPassword: string, newPassword: string) => {
    try {
      const res = await fetch("https://gateway.pureblock.io/api/auth/change-password", {
        method: "POST",
        body: JSON.stringify({oldPassword, newPassword}),
        headers: {
          "Content-Type": "application/json",
          Auth: `${userModel.JWTtoken}`,
        },
      });

      const data = await res.json();

			if (data.success) {
				console.log("your password has been successfully changed: " + data);
      }

    } catch (error) {
      console.log("changePassword error: " + error);  
    }
  },

});
