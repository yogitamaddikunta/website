/** 
 * div id='parent'
 * <div class='child'>hellow child
 */ const heading = [
    React.createElement("div", {
        id: "parent"
    }, [
        React.createElement("div", {
            id: "child"
        }, [
            React.createElement("h1", {}, "h1 tag from child"),
            React.createElement("h2", {}, "h2 tag from child")
        ]),
        React.createElement("div", {
            id: "child2"
        }, [
            React.createElement("h1", {}, "h1 tag from child2"),
            React.createElement("h2", {}, "h2 tag from child2")
        ])
    ]),
    React.createElement("div", {
        id: "parent2"
    }, [
        React.createElement("div", {
            id: "child3"
        }, [
            React.createElement("h1", {}, "h1 tag from child3"),
            React.createElement("h2", {}, "h2 tag from child3")
        ]),
        React.createElement("div", {
            id: "child4"
        }, [
            React.createElement("h1", {}, "h1 tag from child4"),
            React.createElement("h2", {}, "h2 tag from child4")
        ])
    ])
];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.c36f364e.js.map
