package com.lch.base.basedb.data;

import com.lch.base.basedb.model.QrtzPausedTriggerGrpsExample;
import com.lch.base.basedb.model.QrtzPausedTriggerGrpsKey;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface QrtzPausedTriggerGrpsMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_paused_trigger_grps
     *
     * @mbggenerated
     */
    int countByExample(QrtzPausedTriggerGrpsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_paused_trigger_grps
     *
     * @mbggenerated
     */
    int deleteByExample(QrtzPausedTriggerGrpsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_paused_trigger_grps
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(QrtzPausedTriggerGrpsKey key);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_paused_trigger_grps
     *
     * @mbggenerated
     */
    int insert(QrtzPausedTriggerGrpsKey record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_paused_trigger_grps
     *
     * @mbggenerated
     */
    int insertSelective(QrtzPausedTriggerGrpsKey record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_paused_trigger_grps
     *
     * @mbggenerated
     */
    List<QrtzPausedTriggerGrpsKey> selectByExample(QrtzPausedTriggerGrpsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_paused_trigger_grps
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") QrtzPausedTriggerGrpsKey record, @Param("example") QrtzPausedTriggerGrpsExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table qrtz_paused_trigger_grps
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") QrtzPausedTriggerGrpsKey record, @Param("example") QrtzPausedTriggerGrpsExample example);
}