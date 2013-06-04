package com.lch.base.basedb.data;

import com.lch.base.basedb.model.TSeq;
import com.lch.base.basedb.model.TSeqExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TSeqMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int countByExample(TSeqExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int deleteByExample(TSeqExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int insert(TSeq record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int insertSelective(TSeq record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    List<TSeq> selectByExample(TSeqExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    TSeq selectByPrimaryKey(String id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int updateByExampleSelective(@Param("record") TSeq record, @Param("example") TSeqExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int updateByExample(@Param("record") TSeq record, @Param("example") TSeqExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(TSeq record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_seq
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(TSeq record);
    
    int tickCountSeq(@Param("id") String id, @Param("count") int count);
}