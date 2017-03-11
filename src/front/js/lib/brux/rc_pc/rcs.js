const causes = ["_dom","_window","_react","_path"];

export default (()=>{

    var r = causes.map(cause=>require(`./${cause}/rc`));

    return r;

})();
