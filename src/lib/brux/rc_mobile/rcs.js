const causes = ["_dom","_window","_react","_path"];

export default causes.map(cause=>require(`./${cause}/rc`));
