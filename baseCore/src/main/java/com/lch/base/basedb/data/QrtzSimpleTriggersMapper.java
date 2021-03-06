package com.lch.base.basedb.data;

import com.lch.base.basedb.model.QrtzSimpleTriggers;
import com.lch.base.basedb.model.QrtzSimpleTriggersExample;
import com.lch.base.basedb.model.QrtzSimpleTriggersKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface QrtzSimpleTriggersMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int countByExample(QrtzSimpleTriggersExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int deleteByExample(QrtzSimpleTriggersExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(QrtzSimpleTriggersKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int insert(QrtzSimpleTriggers record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int insertSelective(QrtzSimpleTriggers record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    List<QrtzSimpleTriggers> selectByExample(QrtzSimpleTriggersExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    QrtzSimpleTriggers selectByPrimaryKey(QrtzSimpleTriggersKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") QrtzSimpleTriggers record, @Param("example") QrtzSimpleTriggersExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") QrtzSimpleTriggers record, @Param("example") QrtzSimpleTriggersExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(QrtzSimpleTriggers record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_simple_triggers
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(QrtzSimpleTriggers record);
}