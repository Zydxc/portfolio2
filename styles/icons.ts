
interface StyleProps {
    fill: string;
    stroke: string;

    hover?: {
        fill: string;
        stroke: string;
    }
  }

  
export const iconStyle: StyleProps = {
    fill: "#D4D4D4",
    stroke: "#007acc",

    hover: {
        fill: "#d6d6d6",
        stroke: "#007acc",
    }
};



export const iconJsStyle: StyleProps = {
    fill: "#ffd600",
    stroke: "#000001",
}

export const iconTsStyle: StyleProps = {
    fill: "#1976d2",
    stroke: "#fcfdfe",
}

export const iconNextstyle: StyleProps = {
    fill: "#000000",
    stroke: "#FFFFFF",
}

export const iconDbStyle: StyleProps = {
    fill: "#ffca28",
    stroke: "#fefffe",
}

export const iconJsonStyle: StyleProps = {
    fill: "#fbc234", 
    stroke: "#007acc", 
}


export const hoverStyle: React.CSSProperties = {
    backgroundColor: "#3e3e42",
}

export const hoverIconStyle: StyleProps = {
    fill: "#d6d6d6",
    stroke: "#007acc",
}
