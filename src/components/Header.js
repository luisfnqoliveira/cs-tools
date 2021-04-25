import React, { Component } from 'react';
import upittLogo from '../assets/images/Upitt_logo_400x400.jpg';
import { Radio,Button } from "antd";
import "../styles/Header.css";
import "antd/dist/antd.css";

const roles = [
	{ label: "Student", value: "Student" },
	{ label: "Librarian", value: "Librarian" }
];

class Role extends Component {

	render() {
		return (
			<Radio.Group
				options={roles}
				onChange={this.props.onChange}
				value={this.props.role}
				optionType="button"
				buttonStyle="solid"
			/>
		);
	}
}

class Header extends Component {

	render() {
		return (
			<header className="App-header" >
				<img src={upittLogo} alt='logo' className="App-logo" />
				<p className="title" >
					Memory Paging Practice System
                </p>
				<Button type="default" className="overview-button" onClick={this.props.clickOverview}>
					Overview
          		</Button>
				<div className="role-button">
					<Role role={this.props.role} onChange={this.props.onChange} />
				</div>
			</header>
		);
	}
}

export default Header;