import PropTypes from 'prop-types';

const Row = ({ c1, c2, c3 }) => {
    return (
        <tr>
            {c1 ? <td>Aquifer 1:</td> : <td></td>}
            {c2 ? <td></td> : <td></td>}
            {c3 ? <td>d3</td> : <td></td>}
        </tr>
    );
};

Row.propTypes = {
    c1: PropTypes.bool.isRequired,
    c2: PropTypes.bool.isRequired,
    c3: PropTypes.bool.isRequired,
};

export default Row;
