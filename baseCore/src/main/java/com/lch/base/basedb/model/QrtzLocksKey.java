package com.lch.base.basedb.model;

public class QrtzLocksKey {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column qrtz_locks.SCHED_NAME
     *
     * @mbggenerated
     */
    private String schedName;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column qrtz_locks.LOCK_NAME
     *
     * @mbggenerated
     */
    private String lockName;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column qrtz_locks.SCHED_NAME
     *
     * @return the value of qrtz_locks.SCHED_NAME
     *
     * @mbggenerated
     */
    public String getSchedName() {
        return schedName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column qrtz_locks.SCHED_NAME
     *
     * @param schedName the value for qrtz_locks.SCHED_NAME
     *
     * @mbggenerated
     */
    public void setSchedName(String schedName) {
        this.schedName = schedName == null ? null : schedName.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column qrtz_locks.LOCK_NAME
     *
     * @return the value of qrtz_locks.LOCK_NAME
     *
     * @mbggenerated
     */
    public String getLockName() {
        return lockName;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column qrtz_locks.LOCK_NAME
     *
     * @param lockName the value for qrtz_locks.LOCK_NAME
     *
     * @mbggenerated
     */
    public void setLockName(String lockName) {
        this.lockName = lockName == null ? null : lockName.trim();
    }
}