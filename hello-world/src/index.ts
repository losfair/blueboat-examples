Router.get("/", () => new Response("hello world"));

Router.get("/example", () => {
  return fetch("https://example.com");
});

Router.get("/yaml", () => {
  const res = TextUtil.Yaml.stringify({
    hello: "world",
  });
  return new Response(res);
});
