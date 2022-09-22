import React from "react";

export class Login extends React.Component {
    render() {
        return(
            <div className="flex flex-col justify-center">
                <div className="flex my-10"></div>
                <div className="flex justify-center">
                    <form className="flex flex-col w-72 justify-center p-2 rounded-md bg-yellow-200 shadow-sm">
                        <h1 className="flex text-xl text-indigo">Anmelden</h1>
                        <div className="flex flex-row">
                            <div className="justify-center grid grid-cols-3 grid-flow-row-dense">
                                <label className="py-2 text-indigo">Email</label>
                                <input type="text" name="email" className="col-span-2 m-2 text-sm rounded-sm"></input>
                                <label className="py-2 text-indigo">Passwort</label>
                                <input type="password" name="password" className="col-span-2 m-2 text-sm rounded-sm"></input>
                            </div>
                        </div>
                        <div className="flex flex-row justify-center">
                            <button type="submit" name="submit" className="bg-indigo text-gray-100 p-1 rounded-md shadow-sm">Einloggen</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}