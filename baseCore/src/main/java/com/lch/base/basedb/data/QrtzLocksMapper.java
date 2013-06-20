package com.lch.base.basedb.data;

import com.lch.base.basedb.model.QrtzLocksExample;
import com.lch.base.basedb.model.QrtzLocksKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface QrtzLocksMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_locks
     *
     * @mbggenerated
     */
    int countByExample(QrtzLocksExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_locks
     *
     * @mbggenerated
     */
    int deleteByExample(QrtzLocksExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_locks
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(QrtzLocksKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_locks
     *
     * @mbggenerated
     */
    int insert(QrtzLocksKey record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_locks
     *
     * @mbggenerated
     */
    int insertSelective(QrtzLocksKey record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_locks
     *
     * @mbggenerated
     */
    List<QrtzLocksKey> selectByExample(QrtzLocksExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_locks
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") QrtzLocksKey record, @Param("example") QrtzLocksExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_locks
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") QrtzLocksKey record, @Param("example") QrtzLocksExample example);
}