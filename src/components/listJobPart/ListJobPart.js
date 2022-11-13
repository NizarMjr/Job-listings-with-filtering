import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddFilter, fetching } from "../../redux/actionNames/ActionNames";
import './listjobpart.css'

const ListJobPart = () => {
    const fetchingData = useSelector(state => state.addJobFilter);
    const data = useSelector(state => state.fetchJobs)
    const dispatch = useDispatch();
    const [fetch, setFetch] = useState(data);
    const restartFetch = () => {
        axios.get('./data.json').then(res => setFetch((res.data)));
    }

    const fetchData = () => {
        if (fetchingData.length === 0) axios.get('./data.json').then(res => dispatch(fetching(res.data)));

        else {
            fetchingData.map((ele) => {
                const filtredData = fetch.filter((item) => {
                    return JSON.stringify(item).toLowerCase().includes(ele.toLowerCase());
                })
                restartFetch();
                dispatch(fetching(filtredData));
            })
        }
    }

    useEffect(() => {
        axios.get('./data.json').then(res => setFetch((res.data)));
        fetchData();
    }, [fetchingData])

    const filterJob = (job) => {
        dispatch(AddFilter(job));
    }

    const listJob = data.map((item) => {
        return (
            < div className="job-part" key={item.id} >
                <div className="about-company">
                    <div className="image">
                        <img src={`../../../${item.logo}`} alt="company logo" />
                    </div>
                    <div className="content">
                        <div className="company">
                            <p className="cls name">{item.company}</p>
                            {item.new ? <p className="cls new">NEW!</p> : ''}
                            {item.featured ? <p className="cls feature">FEATURED</p> : ''}
                        </div>
                        <div className="position">{item.position}</div>
                        <div className="description">
                            <span className="desc">{item.postedAt}</span>
                            <span className="desc">{item.contract}</span>
                            <span className="desc">{item.location}</span>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <span className="skill role" onClick={() => filterJob(item.role)}>{item.role}</span>
                    {item.languages.map((lang) => {
                        return (
                            <span className="skill" onClick={() => filterJob(lang)}>{lang}</span>
                        )
                    })}
                </div>
            </div >
        )
    })
    return (
        <div className="list">
            {listJob}
        </div>
    )
}
export default ListJobPart;