import React from "react";
import { Provider } from "react-redux";
import { act, create } from "react-test-renderer";
import store from "../redux/store";
import Login from "./loginForm";

describe("Login form", () => {
  test("should have 2 inputs", () => {
    const component = create(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const root = component.root;
    const input = root.findAllByType("input")
    expect(input.length).toBe(2)
  });
  
  test("should have 2 buttons", () => {
    const component = create(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const root = component.root;
    const button = root.findAllByType("button");
    expect(button.length).toBe(2);
  });
  test("first button shod have innerText - login", () => {
    const component = create(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const root = component.root;
    const button = root.findAllByType("button");
    expect(button[0].props.children).toBe("login");
  });
  test("second button shod have innerText - register", () => {
    const component = create(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    const root = component.root;
    const button = root.findAllByType("button");
    expect(button[1].props.children).toBe("register");
  });

    test("should not have Message component if no messages came", () => {
      const component = create(
        <Provider store={store}>
          <Login />
        </Provider>
      );
      const root = component.root;
      
      expect(() => {
        const message = root.findByType("span");
      }).toThrow();
    });
  
      test("when press login button, local state changes to login", () => {
        const component = create(
          <Provider store={store}>
            <Login />
          </Provider>
        );
        const root = component.root;
        const btn = root.findAllByType("button");
        act(() => btn[0].props.onClick())
        expect(btn[0].props.children).toBe('login')
      });
});

