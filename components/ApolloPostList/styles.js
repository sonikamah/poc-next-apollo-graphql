import styled from "@emotion/styled";

export const Container = styled("section")({
  paddingBottom: "20px"
});

export const List = styled("ul")({
  margin: 0,
  padding: 0
});

export const ListItem = styled("li")({
  display: "block",
  marginBottom: "10px"
});

export const ListItemContainer = styled("div")({
  alignItems: "center",
  display: "flex"
});

export const Num = styled("span")({
  fontSize: "14px",
  marginRight: "5px"
});

export const A = styled("a")({
  fontSize: "14px",
  marginRight: "10px",
  textDecoration: "none",
  paddingBottom: 0,
  border: 0
});

export const Button = styled("button")({
  ":before": {
    alignSelf: "center",
    borderColor: "#ffffff transparent transparent transparent",
    borderStyle: "solid",
    borderWidth: "6px 4px 0 4px",
    content: '""',
    height: 0,
    marginRight: "5px",
    width: 0
  }
});

export const ButtonPostUpvoterButton = styled("button")({
    backgroundColor: "transparent",
    border: "1px solid #e4e4e4",
    color: "#000",
    ":active": {
      backgroundColor: "transparent"
    },
    ":before": {
      alignSelf: "center",
      borderColor: "transparent transparent #000000 transparent",
      borderStyle: "solid",
      borderWidth: "0 4px 6px 4px",
      content: '""',
      height: 0,
      marginRight: "5px",
      width: 0
    }
  });