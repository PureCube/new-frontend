import {makeAutoObservable} from 'mobx';

export interface userModelProps {
	userId: number | null,
	userName: string | null,
	userEmail: string | null,
	userGold: number | null,
	userAvatar: string,
	JWTtoken: string | null,
	
	registerUser: Function,
	loginUser: Function,
	fetchUserData: Function,
}

export const userModel: userModelProps = makeAutoObservable({
	// STORE
	userId: null,
	userName: null,
	userEmail: null,
	userGold: null,
	userAvatar: "/images/user/user-avatar.svg",
	JWTtoken: null,

	// ACTIONS
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
        userModel.userName = data.body.name;
        userModel.userEmail = data.body.email;
        userModel.userGold = data.body.gold;
      }

    } catch (error) {
      console.log("fetchUserData error: " + error);  
    }
  },

});
