import styled from "@emotion/styled";

export const SidebarStyles = styled.aside`
  .sidebar__wrapper {
    max-width: 250px;
    width: fit-content;
    height: 100vh;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-right: 1px solid grey;
  }

  .sidebar__logo {
  }

  .sidebar__list-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;

    .sidebar__list-btn {
      border: 1px solid;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-radius: 10px;
      text-transform: none;
    }
  }
`;
