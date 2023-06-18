"use client";

import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Header = () => (
  <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">
        Next+Supabase+OpenAI+App
      </a>
    </div>
    <div className="flex-none gap-2">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="rounded-full">
            <HiOutlineUserCircle size={32} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a className="justify-between" href="/profile">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <form action="/auth/signout" method="post">
              <button className="button block" type="submit">
                Sign out
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
