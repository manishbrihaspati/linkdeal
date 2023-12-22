import React from "react";
import LayoutWrapper from "../../Layout/LayoutWrapper";
import PropTypes from "prop-types";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Tooltip from "@mui/joy/Tooltip";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import IconButton from '@mui/material/IconButton';

import MoreVertIcon from "@mui/icons-material/MoreVert";

function createData(
    name,
    company,
    meeting_date,
    connection_date,
    note,
    msg_sent,
    userid
) {
    return {
        name,
        company,
        meeting_date,
        connection_date,
        note,
        msg_sent,
        userid,
    };
}

const rows = [
    createData(
        "Manish my name is long",
        "TBI",
        "10 November 2023",
        " 11 November 2023",
        "afsdThsi is note dude",
        3,
        12
    ),
    createData(
        "john deo",
        "TBIsfasd",
        "November 14 2023",
        "November 16 2023",
        "fgdsfThsi is note dude",
        31,
        122
    ),
    createData(
        "satthi",
        "dasfTBI",
        "14 November  2023",
        "16 November  2023",
        "wersdThsi is note dude",
        31,
        122
    ),
    createData(
        "sarita",
        "tseTBI",
        "November 14 2023",
        "November 16 2023",
        "cvasdThsi is note dude",
        31,
        122
    ),
    createData(
        "rahul",
        "cadTBI",
        "November 14 2023",
        "November 16 2023",
        "weqxThsi is note dude",
        31,
        122
    ),
];

function labelDisplayedRows({ from, to, count }) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: "name",
        numeric: false,
        disablePadding: true,
        label: "Name",
    },
    {
        id: "company",
        numeric: false,
        disablePadding: true,
        label: "Company",
    },
    {
        id: "meetingdate",
        numeric: false,
        disablePadding: true,
        label: "Meeting Date",
    },
    {
        id: "connectiondate",
        numeric: false,
        disablePadding: true,
        label: "Connection Date",
    },
    {
        id: "notes",
        numeric: false,
        disablePadding: true,
        label: "Notes",
    },
    {
        id: "messagesent",
        numeric: false,
        disablePadding: true,
        label: "Message Sent",
    },
    {
        id: "action",
        numeric: false,
        disablePadding: true,
        label: "Action",
    },
];

function EnhancedTableHead(props) {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <thead>
            <tr>
                <th>
                    <Checkbox
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        slotProps={{
                            input: {
                                "aria-label": "select all",
                            },
                        }}
                        sx={{ verticalAlign: "" }}
                    />
                </th>
                {headCells.map((headCell) => {
                    const active = orderBy === headCell.id;
                    return (
                        <th
                            key={headCell.id}
                            style={{ textAlign: "left" }}
                            aria-sort={
                                active
                                    ? { asc: "ascending", desc: "descending" }[
                                          order
                                      ]
                                    : undefined
                            }
                        >
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <Link
                                underline="none"
                                color="neutral"
                                textColor={
                                    active ? "primary.plainColor" : undefined
                                }
                                component="button"
                                onClick={createSortHandler(headCell.id)}
                                fontWeight="lg"
                                startDecorator={
                                    headCell.numeric ? (
                                        <ArrowDownwardIcon
                                            sx={{ opacity: active ? 1 : 0 }}
                                        />
                                    ) : null
                                }
                                endDecorator={
                                    !headCell.numeric ? (
                                        <ArrowDownwardIcon
                                            sx={{ opacity: active ? 1 : 0 }}
                                        />
                                    ) : null
                                }
                                sx={{
                                    "& svg": {
                                        transition: "0.2s",
                                        transform:
                                            active && order === "desc"
                                                ? "rotate(0deg)"
                                                : "rotate(180deg)",
                                    },
                                    "&:hover": { "& svg": { opacity: 1 } },
                                }}
                            >
                                {headCell.label}
                                {active ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === "desc"
                                            ? "sorted descending"
                                            : "sorted ascending"}
                                    </Box>
                                ) : null}
                            </Link>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}

function EnhancedTableToolbar(props) {
    const { numSelected } = props;

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "left",
                py: 1,
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: "background.level1",
                }),
                borderTopLeftRadius: "var(--unstable_actionRadius)",
                borderTopRightRadius: "var(--unstable_actionRadius)",
            }}
        >
            {numSelected > 0 ? (
                <Typography sx={{ flex: "1 1 100%" }} component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    level="body-lg"
                    sx={{ flex: "1 1 100%" }}
                    id="tableTitle"
                    component="div"
                >
                    All Connections
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton size="sm" color="danger" variant="solid">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton size="sm" variant="outlined" color="neutral">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Box>
    );
}

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "right",
        }}
        {...props}
    />
))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === "light"
                ? "rgb(55, 65, 81)"
                : theme.palette.grey[300],
        boxShadow:
            "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity
                ),
            },
        },
    },
}));

const ConnectionList = () => {
    const [order, setOrder] = React.useState("asc");
    const [orderBy, setOrderBy] = React.useState("calories");
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event, newValue) => {
        setRowsPerPage(parseInt(newValue.toString(), 10));
        setPage(0);
    };

    const getLabelDisplayedRowsTo = () => {
        if (rows.length === -1) {
            return (page + 1) * rowsPerPage;
        }
        return rowsPerPage === -1
            ? rows.length
            : Math.min(rows.length, (page + 1) * rowsPerPage);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <LayoutWrapper title="Connections">
            {/* hii con */}
            <h5>
                <b>Linkdeal Connections... </b>
            </h5>

            <div className="my-5">
                <Sheet
                    variant="outlined"
                    sx={{ width: "100%", boxShadow: "sm", borderRadius: "sm" , overflow: 'auto', }}
                >
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <Table
                        aria-labelledby="tableTitle"
                        hoverRow
                        sx={{
                            "--TableCell-headBackground": "transparent",
                            "--TableCell-selectedBackground": (theme) =>
                                theme.vars.palette.success.softBg,
                            "& thead th:nth-child(1)": {
                                width: "40px",
                            },
                            "& thead th:nth-child(2)": {
                                width: "20%",
                            },
                            "& tr > *:nth-child(n+10)": { textAlign: "right" },
                        }}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <tbody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    const isItemSelected = isSelected(row.name);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <tr
                                            onClick={(event) =>
                                                handleClick(event, row.name)
                                            }
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.name}
                                            // selected={isItemSelected}
                                            style={
                                                isItemSelected
                                                    ? {
                                                          "--TableCell-dataBackground":
                                                              "var(--TableCell-selectedBackground)",
                                                          "--TableCell-headBackground":
                                                              "var(--TableCell-selectedBackground)",
                                                      }
                                                    : {}
                                            }
                                        >
                                            <th scope="row">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    slotProps={{
                                                        input: {
                                                            "aria-labelledby":
                                                                labelId,
                                                        },
                                                    }}
                                                    sx={{
                                                        verticalAlign: "top",
                                                    }}
                                                />
                                            </th>
                                            <td>
                                                <img
                                                    className="connectionUserImg"
                                                    src="images/react/icons/usericon.jpeg"
                                                    alt=""
                                                />{" "}
                                                {row.name}
                                            </td>
                                            <td>{row.company}</td>
                                            <td>{row.meeting_date}</td>
                                            <td>{row.connection_date}</td>
                                            <td>{row.note}</td>
                                            <td>{row.msg_sent}</td>
                                            <td>
                                                <div
                                                    className="row flex-start"
                                                    style={{ gap: "4%" }}
                                                >
                                                    <div className="action col-md-2">
                                                        <button className="btn btn-primary p-1">
                                                            <svg
                                                                className="commonIconWhite"
                                                                viewBox="0 0 512 512"
                                                            >
                                                                <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="action col-md-2">
                                                        <button className="btn btn-primary p-1">
                                                            <svg
                                                                className="commonIconWhite"
                                                                viewBox="0 0 448 512"
                                                            >
                                                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="action col-md-2">
                                                        <button className="btn btn-primary p-1">
                                                            <svg
                                                                className="commonIconWhite"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    d="M0 0h24v24H0V0z"
                                                                    fill="none"
                                                                ></path>
                                                                <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1z"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                    <div className="action col-md-2">
                                                        <IconButton
                                                            aria-label="more"
                                                            id="long-button"
                                                            aria-controls={
                                                                open
                                                                    ? "long-menu"
                                                                    : undefined
                                                            }
                                                            aria-expanded={
                                                                open
                                                                    ? "true"
                                                                    : undefined
                                                            }
                                                            aria-haspopup="true"
                                                            onClick={
                                                                handleMenuClick
                                                            }
                                                        >
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                        <StyledMenu
                                                            id="demo-customized-menu"
                                                            MenuListProps={{
                                                                "aria-labelledby":
                                                                    "demo-customized-button",
                                                            }}
                                                            anchorEl={anchorEl}
                                                            open={open}
                                                            onClose={
                                                                handleClose
                                                            }
                                                        >
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                disableRipple
                                                            >
                                                                <div className="actionSubMenuIcon">
                                                                <svg className="commonWhiteIcon pr-1 " style={{fill:"rgb(76, 217, 100)" , height:'30px' , width: '30px' , paddingRight:'10px' }} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></svg>
                                                                </div>
                                                                <b>View Connection</b>
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                disableRipple
                                                            >
                                                                <div className="actionSubMenuIcon">
                                                                <svg className="commonWhiteIcon pr-1 " style={{fill:"rgb(30, 31, 38)" , height:'30px' , width: '30px' , paddingRight:'10px' }} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></svg>
                                                                </div>
                                                                <b>Edit Connection</b>
                                                            </MenuItem>
                                                            <MenuItem
                                                                onClick={
                                                                    handleClose
                                                                }
                                                                disableRipple
                                                            >
                                                                    <div className="actionSubMenuIcon">
                                                                    <svg className="commonWhiteIcon pr-1 " style={{fill:"rgb(255, 45, 85)" , height:'30px' , width: '30px' , paddingRight:'10px' }} viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></svg>
                                                                    </div>
                                                                {/* <ArchiveIcon /> */}
                                                                <b>Disconnect / Delete </b>
                                                            </MenuItem>
                                                        </StyledMenu>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <tr
                                    style={{
                                        height: `calc(${emptyRows} * 40px)`,
                                        "--TableRow-hoverBackground":
                                            "transparent",
                                    }}
                                >
                                    <td colSpan={6} aria-hidden />
                                </tr>
                            )}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={8}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 2,
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <FormControl
                                            orientation="horizontal"
                                            size="sm"
                                        >
                                            <FormLabel>
                                                Rows per page:
                                            </FormLabel>
                                            <Select
                                                onChange={
                                                    handleChangeRowsPerPage
                                                }
                                                value={rowsPerPage}
                                            >
                                                <Option value={5}>5</Option>
                                                <Option value={10}>10</Option>
                                                <Option value={25}>25</Option>
                                            </Select>
                                        </FormControl>
                                        <Typography
                                            textAlign="center"
                                            sx={{ minWidth: 80 }}
                                        >
                                            {labelDisplayedRows({
                                                from:
                                                    rows.length === 0
                                                        ? 0
                                                        : page * rowsPerPage +
                                                          1,
                                                to: getLabelDisplayedRowsTo(),
                                                count:
                                                    rows.length === -1
                                                        ? -1
                                                        : rows.length,
                                            })}
                                        </Typography>
                                        <Box sx={{ display: "flex", gap: 1 }}>
                                            <IconButton
                                                size="sm"
                                                color="neutral"
                                                variant="outlined"
                                                disabled={page === 0}
                                                onClick={() =>
                                                    handleChangePage(page - 1)
                                                }
                                                sx={{
                                                    bgcolor:
                                                        "background.surface",
                                                }}
                                            >
                                                <KeyboardArrowLeftIcon />
                                            </IconButton>
                                            <IconButton
                                                size="sm"
                                                color="neutral"
                                                variant="outlined"
                                                disabled={
                                                    rows.length !== -1
                                                        ? page >=
                                                          Math.ceil(
                                                              rows.length /
                                                                  rowsPerPage
                                                          ) -
                                                              1
                                                        : false
                                                }
                                                onClick={() =>
                                                    handleChangePage(page + 1)
                                                }
                                                sx={{
                                                    bgcolor:
                                                        "background.surface",
                                                }}
                                            >
                                                <KeyboardArrowRightIcon />
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </td>
                            </tr>
                        </tfoot>
                    </Table>
                </Sheet>
            </div>
        </LayoutWrapper>
    );
};

export default ConnectionList;
