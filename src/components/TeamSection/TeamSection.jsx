import { useEffect, useState } from "react";
import TeamCard from "../TeamCard/TeamCard";

const TeamSection = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('/team.json')
        .then(res => res.json())
        .then(data => setTeams(data))
    },[])
    return (
        <div>
            <div className="text-center mb-10">
                <h4 className="font-semibold text-xl text-[#ff3438] mb-5">Team</h4>
                <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    teams.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default TeamSection;