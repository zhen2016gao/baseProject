package com.lch.web.bean;

public abstract class BaseVO {

	private int page;
	
	private int rows;
	
	public int getStartCount(){
		return (page - 1) * rows + 1;
	}
	
	public int getEndCount(){
		return  page * rows;
	}

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getRows() {
		return rows;
	}

	public void setRows(int rows) {
		this.rows = rows;
	}
	
	public int getStart() {
		return getEnd() - rows + 1;
	}

	public int getEnd() {
		return page * rows -1;
	}
	
	
	
}
