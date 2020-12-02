import styled, { css } from 'styled-components';

export const Container = styled.ul<{
  visible: boolean;
}>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  max-height: ${(props) => (props.visible ? 'unset' : '0')};
  overflow: hidden;
  -webkit-transition: max-height 0.3s ease;
  -o-transition: max-height 0.3s ease;
  transition: max-height 0.3s ease;
  background-color: #0808081a;
  padding: 0;
  list-style: none;

  ${(props) =>
    props.visible &&
    css`
      padding: 5px 10px 5px 10px;
      font-size: 13px;
    `}
`;
export const Dropdown = styled.li`
  svg:nth-child(n + 2) {
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    -webkit-transition: -webkit-transform 0.3s ease;
    transition: -webkit-transform 0.3s ease;
    -o-transition: transform 0.3s ease;
    transition: transform 0.3s ease;
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  }
`;
