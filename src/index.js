window.onload = () => {
  document.getElementById("button").onclick = () => {
    window.YaAuthSuggest.init(
      {
        client_id: "3273121384574184b87e0aa78785d5d7",
        response_type: "token",
        redirect_uri: "https://oauth-master-class-gamma-three.vercel.app/index.html",
      },
      "https://oauth-master-class-gamma-three.vercel.app",
      {
        view: "button",
        parentId: "buttonContainer",
        buttonSize: "m",
        buttonView: "main",
        buttonTheme: "light",
        buttonBorderRadius: "0",
        buttonIcon: "ya",
      }
    )
      .then(({ handler }) => handler())
      .then((data) => console.log("Сообщение с токеном", data))
      .catch((error) => console.log("Обработка ошибки", error));
  };
};
