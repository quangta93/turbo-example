module.exports = {
  root: true,
  extends: ["custom", "plugin:react/recommended"],
  settings: {
    react: {
      version: "18.2.0"
    }
  },
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-no-target-blank": "off"
  }
};
