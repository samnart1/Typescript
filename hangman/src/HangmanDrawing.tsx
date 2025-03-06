const HEAD = (
    <div
        style={{
            height: "50px",
            width: "50px",
            borderRadius: "100%",
            border: "solid black 10px",
            right: "-20px",
            position: "absolute",
            top: "45px",
        }}
    />
);

const BODY = (
    <div
        style={{
            height: "100px",
            width: "10px",
            position: "absolute",
            background: "black",
            right: "10px",
            top: "105px",
        }}
    />
);

const RIGHT_ARM = (
    <div
        style={{
            height: "10px",
            width: "100px",
            background: "black",
            position: "absolute",
            right: -90,
            top: "150px",
            rotate: "-30deg",
            transformOrigin: "left bottom",
        }}
    />
);

const LEFT_ARM = (
    <div
        style={{
            height: "10px",
            width: "100px",
            background: "black",
            position: "absolute",
            right: 20,
            top: "150px",
            rotate: "30deg",
            transformOrigin: "right bottom",
        }}
    />
);

const RIGHT_LEG = (
    <div
        style={{
            height: "10px",
            width: "100px",
            background: "black",
            position: "absolute",
            right: 20,
            top: "195px",
            rotate: "-60deg",
            transformOrigin: "right top",
        }}
    />
);

const LEFT_LEG = (
    <div
        style={{
            height: "10px",
            width: "100px",
            background: "black",
            position: "absolute",
            right: -90,
            top: "195px",
            rotate: "60deg",
            transformOrigin: "left top",
        }}
    />
);



export function HangmanDrawing() {
    return (
        <div style={{ position: "relative" }}>
            {HEAD}
            {BODY}
            {RIGHT_ARM}
            {LEFT_ARM}
            {RIGHT_LEG}
            {LEFT_LEG}

            <div
                style={{
                    height: "50px",
                    width: "10px",
                    background: "black",
                    // marginLeft: 200 + 119 + "px",
                    position: "absolute",
                    top: 0,
                    right: 10,
                }}
            />

            <div
                style={{
                    height: "10px",
                    width: "230px",
                    background: "black",
                    marginLeft: "120px",
                }}
            />

            <div
                style={{
                    height: "400px",
                    width: "10px",
                    background: "black",
                    marginLeft: "120px",
                }}
            />

            <div
                style={{
                    height: "10px",
                    width: "250px",
                    backgroundColor: "black",
                }}
            />
        </div>
    );
}
